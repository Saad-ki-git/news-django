from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Listing
from .serializers import ListingSerializer,ListingDetailSerializer
from datetime import datetime,timezone,timedelta
from .pagination import CustomPagination
from rest_framework.generics import RetrieveAPIView
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
# ListAPIView is used for reteriving multiple object
class ListingView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ListingSerializer
    lookup_field = "slug"
    pagination_class = CustomPagination
    
    
    def get_queryset(self):
        search_filter = Listing.objects.filter(is_published=True)
        title = self.request.query_params.get("title")
        if title is not None:
           search_filter = search_filter.filter(title__icontains=title)
        return search_filter.order_by("-created_at")



# this can also be done by RerterieveAPI but here i am use a Custom APIView
class ListingDetailView(APIView):
    permission_classes = [AllowAny]

    def get_object(self,slug):
        try:
            return Listing.objects.get(slug=slug,is_published=True)
        except Listing.DoesNotExist:
            raise Http404
        
    def get(self,request,slug,format=None):
        listing = self.get_object(slug)
        serializer = ListingDetailSerializer(listing)
        
        return Response(serializer.data,status=status.HTTP_200_OK)
