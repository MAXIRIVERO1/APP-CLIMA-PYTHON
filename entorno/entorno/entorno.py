"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config

import reflex as rx
from entorno.components.clima import render_weather_component as clima


docs_url = "https://reflex.dev/docs/getting-started/introduction/"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""


def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            clima()
        ),
        height="100vh",
    )


app = rx.App()
app.add_page(index)
