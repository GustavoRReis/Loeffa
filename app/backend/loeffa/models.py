from django.db import models


class Workstation(models.Model):
    name = models.CharField(max_length=50)
    available = models.BooleanField(default=False)


class Booking(models.Model):
    workstation = models.ForeignKey(Workstation, on_delete=models.CASCADE)
    entry_date = models.DateTimeField(auto_now_add=True)
    departure_date = models.DateTimeField(auto_now=True)
