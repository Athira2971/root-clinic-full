import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contact


@csrf_exempt
def contact_create(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            first_name = data.get("first_name")
            last_name = data.get("last_name")
            email = data.get("email")
            message = data.get("message")

            # Validation
            if not first_name or not last_name or not email or not message:
                return JsonResponse(
                    {"error": "All fields are required"},
                    status=400
                )

            # Save to DB
            Contact.objects.create(
                first_name=first_name,
                last_name=last_name,
                email=email,
                message=message
            )

            return JsonResponse(
                {"message": "Contact saved successfully"},
                status=201
            )

        except Exception as e:
            return JsonResponse(
                {"error": str(e)},
                status=400
            )

    return JsonResponse({"error": "Invalid request"}, status=405)
