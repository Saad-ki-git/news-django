from django.contrib import admin
from .models import Authors

class AuthorsAdmin(admin.ModelAdmin):
    # Display these fields in the admin panel
    list_display = ("id", "name", "date_joined")
    list_display_links = ("id", "name")
    list_per_page = 20

# Register the Authors model with the AuthorsAdmin class
admin.site.register(Authors, AuthorsAdmin)
