from django.contrib import admin
from .models import Listing
# Register your models here.
class ListingAdmin(admin.ModelAdmin):
    list_display = ("id","title","is_published","list_date","author")
    list_display = ("id","title")
    list_filter = ("author",)
    search_fields = ("title",)
    list_per_page = 20
    
    
admin.site.register(Listing,ListingAdmin)