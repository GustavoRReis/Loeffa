from rest_framework import routers
from loeffa.views import WorkstationViewSet, BookingViewSet
from django.urls import path, include

router = routers.DefaultRouter()

router.register(r"workstation", WorkstationViewSet)
router.register(r"booking", BookingViewSet)

urlpatterns = [
    path("api/", include(router.urls))
]
