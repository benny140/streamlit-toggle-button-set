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