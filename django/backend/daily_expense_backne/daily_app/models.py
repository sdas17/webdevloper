from django.db import models

# Create your models here.
class UserDetails(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    reg_date = models.DateTimeField(auto_now_add=True)
class Expense(models.Model):
    user = models.ForeignKey(
        UserDetails,
        on_delete=models.CASCADE
    )
    expense_date = models.DateField(null=True, blank=True)
    expense_item = models.CharField(max_length=100)
    expense_cost = models.CharField(max_length=100)
    note_date = models.DateTimeField(auto_now_add=True)