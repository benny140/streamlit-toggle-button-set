import os
import streamlit.components.v1 as components

_RELEASE = True

if not _RELEASE:
    _component_func = components.declare_component(
        "toggle_button_set",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("toggle_button_set", path=build_dir)

def toggle_button_set(button_list, default=[], color="standard", size="medium", exclusive=False, use_container_width=False, key=None):
    # component_value = _component_func(name=name, key=key, default=0)
    component_value = _component_func(
        button_list=button_list, 
        default=default,
        color=color, 
        size=size,
        exclusive=exclusive,
        use_container_width=use_container_width,
        key=key
    )
    return component_value
