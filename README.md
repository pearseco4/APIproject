# Chicago Art Institute API 

### Introduction 

I built an API using data from the Art Institute of Chicago's API. My API lists the following information: 
 - Title of the artwork 
 - Date of creation 
 - Artist of the artwork
 - An image of the artwork
 
## How to use 

The following link will take you to the full array of all artworks located in my API: 

`https://pearse-o-app.herokuapp.com/artworks`

  ## Searching by title 
  
  To search for an artwork by its title, use the following endpoint: 
  
  `https://pearse-o-app.herokuapp.com/artworks/:title`
  
  For example, if you wanted to look up the painting, "Starry Night and the Astronauts", you would use the following link:
  
  `https://pearse-o-app.herokuapp.com/artworks/Starry%20Night%20and%20the%20Astronauts`
  
  ## Searching by artist
  
  To search for an artwork by artist, use the following endpoint:
  
  `https://pearse-o-app.herokuapp.com/artworks/name/:name`
  
  For example, if you wanted to look at all artwork credited to Israhel van Meckenem the Younger, you would use the following endpoint: 
  
  `https://pearse-o-app.herokuapp.com/artworks/name/Israhel%20van%20Meckenem%20the%20Younger`
  
  
### CRUD Functionality

To read (GET) all artworks in the list:

Use the below endpoint with an API platform, ie. Postman. Make sure to have the GET setting selected.

  `https://pearse-o-app.herokuapp.com/artworks`
  
To create (POST) a new artwork:

Use the below endpoint with an API platform, ie. Postman. Make sure to switch to the POST setting, click on Body, and select raw and JSON.

`https://pearse-o-app.herokuapp.com/artworks`

To update (PUT) or delete (DELETE):

Use the same endpoint on an API platform, ie. Postman. Make sure to switch to the appropriate HTTP verb. Any sort of update or deletion will require the title of the artwork that you are updating or deleting.



