import React, { useEffect, useState } from 'react'
import { Button, CardActions, CardContent, CardMedia, Typography, Card } from '@mui/material';
import axios from "axios"

const CardEdv = () => {
  const [dataArray, setDataArray] = useState([])
  const GetData = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response)
      setDataArray(response.data)
    }).then((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <>
      <div>
        {

          dataArray?.map((value, index) => {
            return (
              <>
                <Card key={index} sx={{ maxWidth: 345 }} style={{ "marginTop": "20px", "float": "left", "marginLeft": "23px" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="490"
                    image={value.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ "text-align": "center" }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ "text-align": "center" }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ "text-align": "center", "color": "red", "marginLeft": "290px" }}>
                    ${value.price}
                  </CardActions>
                </Card>

              </>

            )
          })
        }
      </div>

    </>
  )
}

export default CardEdv
