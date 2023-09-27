from rest_framework.pagination import PageNumberPagination

class CustomPagination(PageNumberPagination):
    page_size = 6
    page_query_param = "page_size"
    max_page_size = 1000
    ordering = "-id"