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

    def create(self, validated_data):
        workstation_data = validated_data.pop('workstation')
        workstation = Workstation.objects.create(**workstation_data)
        booking = Booking.objects.create(workstation=workstation, **validated_data)
        return booking

    def update(self, instance, validated_data):
        workstation_data = validated_data.pop('workstation', None)
        if workstation_data:
            workstation_serializer = self.fields['workstation']
            workstation = instance.workstation
            updated_workstation = workstation_serializer.update(workstation, workstation_data)
            validated_data['workstation'] = updated_workstation

        return super().update(instance, validated_data)

