from rest_framework import serializers
from loeffa.models import Workstation, Booking


class WorkstationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Workstation
        fields = "__all__"


class BookingSerializer(serializers.HyperlinkedModelSerializer):
    workstation = WorkstationSerializer()

    class Meta:
        model = Booking
        fields = "__all__"
