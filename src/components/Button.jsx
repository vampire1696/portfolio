import React from 'react'
import "./Button.css"

const Button = () => {
    return (
        <div>
         
<button class="cybr-btn">
  About<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch">About_</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>
<button class="cybr-btn">
  Works<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch">Works_</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>

<button class="cybr-btn">
  Contact<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch">Contact_</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>
        </div>
  )
}

export default Button