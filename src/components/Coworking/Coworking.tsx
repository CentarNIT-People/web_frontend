import React from "react"
import { useData } from "../../hooks/useData"

export const Coworking = () => {
    const {data} = useData({category:"coworking"})
    console.log(data)
    return (
        <div>
            <h1>Coworking</h1>
        </div>
    )
}