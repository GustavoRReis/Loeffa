from rest_framework import viewsets
from loeffa.models import Workstation, Booking
from loeffa.serializer import WorkstationSerializer, BookingSerializer

class WorkstationViewSet(viewsets.ModelViewSet):
    queryset = Workstation.objects.all()
    serializer_class = WorkstationSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


