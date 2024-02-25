# streamlit-toggle-button-set

A button can be used to group related options (multi-select & single select), inspired by React Material UI.

## Installation instructions

```sh
pip install streamlit-toggle-button-set
```

## Usage instructions

![alt text](toggle_button_set.PNG)

```python
import streamlit as st
from toggle_button_set import toggle_button_set

outcome = toggle_button_set(
    button_list=['a', 'b', '1', '2'],
    default=['a', '1'],
    color="primary",
    size="large",
    exclusive=False,
    use_container_width=False
)

st.write(outcome)
```

## Arguments

### Required:

- button_list

### Optional:

- _default = []_ - a subset of the button_list that is selected upon rendering.
- _color = "standard"_ - The color of the button when it is selected, options includes 'standard', 'primary', 'secondary', 'error', 'info', 'success' and 'warning'.
- _size = "medium"_ - The size of the component, options includes 'small', 'medium', 'large'.
- _exclusive = False_ - only allow one of the button_list to be selected.
- _use_container_width = False_ - will take up the full width of its container.
