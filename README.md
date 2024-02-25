# streamlit-toggle-button-set

A button can be used to group related options (multi-select & single select), inspired by React Material UI.

## Installation instructions

```sh
pip install streamlit-toggle-button-set
```

## Usage instructions

```python
import streamlit as st
from toggle_button_set import toggle_button_set

outcome = toggle_button_set(
    button_list=['a', 'b', '1', '2', '🐋', '🐉'],
    default=['a', '1', '🐋'],
    color="primary",
    size="large",
    exclusive=False,
    use_container_width=False
)

st.write(outcome)
```

## Github Link

https://github.com/benny140/streamlit-toggle-button-set

## Arguments

REQUIRED:

button_list

OPTIONAL:

(default = []) - a subset of the button_list that is selected upon rendering.

(color = "standard") - The color of the button when it is selected, options includes 'standard', 'primary', 'secondary', 'error', 'info', 'success' and 'warning'.

(size = "medium") - The size of the component, options includes 'small', 'medium', 'large'.

(exclusive = False) - only allow one of the button_list to be selected.

(use_container_width = False) - will take up the full width of its container.
