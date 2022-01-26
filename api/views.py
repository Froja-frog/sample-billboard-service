from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from main.models import Bb
from .serializers import BbSerializer


@api_view(['GET'])
def bbs(request):
    if request.method == 'GET':
        bbs_to_response = Bb.objects.filter(is_active=True)[:10]
        serializer = BbSerializer(bbs_to_response, many=True)
        return Response(serializer.data)
