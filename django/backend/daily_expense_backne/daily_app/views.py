from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from .models import UserDetails
import json

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
