from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def rappeurs(request):
    return render(request, 'rappeurs.html')

def actualites(request):
    return render(request, 'actualites.html')

def contact(request):
    return render(request, 'contact.html')