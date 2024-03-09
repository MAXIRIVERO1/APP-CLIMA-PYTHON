import reflex as rx
import requests

def get_weather():
    # Lógica para obtener la información del clima desde una API
    response = requests.get('http://api.weatherstack.com/current?access_key=41534022e6d0b0a62ac6046771ed5811&query=Salta')
    weather_data = response.json()
    print(weather_data)
    return weather_data

def render_weather_component():
    weather_data = get_weather()

    # Lógica para renderizar la información del clima en la interfaz de usuario
    return rx.vstack(
        rx.hstack(rx.heading("Pronóstico del clima"), rx.icon(tag="cloud")),
        rx.text("Ciudad: Salta capital"),
        rx.text("Temperatura: " + str(weather_data['current']['temperature'])),
        rx.text("Humedad: " + str(weather_data['current']['humidity'])),
        rx.text("Descripción: " + weather_data['current']['weather_descriptions'][0]),
        rx.text("Presión: " + str(weather_data['current']['pressure']))
    )

