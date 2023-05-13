import React from "react"

function Button(){

    return (
        <div>
  <Button
    color="primary"
    outline
  >
    primary
  </Button>
  {' '}
  <Button outline>
    secondary
  </Button>
  {' '}
  <Button
    color="success"
    outline
  >
    success
  </Button>
  {' '}
  <Button
    color="info"
    outline
  >
    info
  </Button>
  {' '}
  <Button
    color="warning"
    outline
  >
    warning
  </Button>
  {' '}
  <Button
    color="danger"
    outline
  >
    danger
  </Button>
</div>
    )
}

export default Button;