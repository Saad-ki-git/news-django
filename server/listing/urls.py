from django.urls import path
from .views import ListingView,ListingDetailView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("",ListingView.as_view()),
    path("<slug>",ListingDetailView.as_view())
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)