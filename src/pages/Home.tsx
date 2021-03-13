import React from "react"
import "primereact/resources/themes/md-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import { Button } from "primereact/button"

const Home = () => (
  <div>
    Hello world!
    <h5>Rounded Icon Buttons</h5>
    <Button
      icon="pi pi-bookmark"
      className="p-button-rounded p-button-secondary"
    />
    <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
    <Button icon="pi pi-user" className="p-button-rounded p-button-info" />
    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" />
    <Button icon="pi pi-heart" className="p-button-rounded p-button-help" />
    <Button icon="pi pi-times" className="p-button-rounded p-button-danger" />
    <Button icon="pi pi-check" className="p-button-rounded" />
  </div>
)

export default Home
