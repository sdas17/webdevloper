from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from .models import UserDetails
import json
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework import status

@csrf_exempt
def signup(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "Only POST method allowed"},
            status=405
        )

    try:
        data = json.loads(request.body)

        full_name = data.get("full_name")
        email = data.get("email")
        password = data.get("password")

        if not full_name or not email or not password:
            return JsonResponse(
                {"error": "All fields are required"},
                status=400
            )

        if UserDetails.objects.filter(email=email).exists():
            return JsonResponse(
                {"error": "Email already exists"},
                status=409
            )

        user = UserDetails.objects.create(
            full_name=full_name,
            email=email,
            password=make_password(password)
        )

        return JsonResponse(
            {
                "message": "User registered successfully",
                "user": {
                    "id": user.id,
                    "full_name": user.full_name,
                    "email": user.email,
                }
            },
            status=201
        )

    except json.JSONDecodeError:
        return JsonResponse(
            {"error": "Invalid JSON"},
            status=400
        )

    except Exception as e:
        # 👇 THIS WILL SHOW THE REAL ERROR
        return JsonResponse(
            {"error": str(e)},
            status=500
        )
@api_view(['POST'])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response(
            {"error": "Email and password are required"},
            status=status.HTTP_400_BAD_REQUEST
        )
    print(email,password)
    # 🔐 Authenticate user
    user = authenticate(email=email, password=password)
    print(user)
    if user is None:
        return Response(
            {"error": "Invalid email or password"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    # 🔑 Generate JWT tokens
    refresh = RefreshToken.for_user(user)

    return Response({
        "message": "Login successful",
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "user": {
            "id": user.id,
            "email": user.email,
            "username": user.username
        }
    }, status=status.HTTP_200_OK)