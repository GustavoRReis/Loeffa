# Generated by Django 4.2.1 on 2023-05-26 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("loeffa", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Booking",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("entry_date", models.DateTimeField(auto_now_add=True)),
                ("departure_date", models.DateTimeField(auto_now=True)),
                (
                    "workstation",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="loeffa.workstation",
                    ),
                ),
            ],
        ),
    ]
