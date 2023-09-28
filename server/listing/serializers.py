from .models import Listing 
from rest_framework import serializers

# using as blog thumbnail
class ListingSerializer(serializers.ModelSerializer):
    author_name = serializers.StringRelatedField(source='author.name',read_only=True)
    author_email = serializers.StringRelatedField(source='author.email',read_only=True)
    class Meta:
        model = Listing
        fields = ["title","author_name","created_at","photo","author_email","is_published","slug","desc"]
        
# showing the whole blog detail   
class ListingDetailSerializer(serializers.ModelSerializer):
    author_name = serializers.StringRelatedField(source='author.name',read_only=True)
    author_email = serializers.StringRelatedField(source='author.email',read_only=True)
    class Meta:
        model = Listing
        fields = ["title","author_name","created_at","photo","author_email","is_published","slug","desc","detail_desc"]
        lookup_field = "slug"
        

# serializers! Serializers is a way to convert Python data to API JSON format and vice-versa.
