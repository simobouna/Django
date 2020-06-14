from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('Accueil', views.index, name='index'),
    path('Rappeurs', views.rappeurs, name='rappeurs'),
    path('Actualites', views.actualites, name='Actualites'),
    path('Contact', views.contact, name='contact'),
]