# URL-shortener
Project for URL Shortner and Deep linking

# Installation

`npm install images-scraper`

# Example

## 1. post request using simple longUrl
```
http://localhost:5000/short

Body(JSON)
{
     "url":"https://www.youtube.com/watch?v=rqE3NvlcHDY"
}
```
![Screenshot (57)](https://user-images.githubusercontent.com/49112789/80279670-bb558700-871c-11ea-97a9-9c7b037b1859.png)

## 2. Post request with longUrl and custom shortUrl

```
http://localhost:5000/short
Body(JSON)
{
  "url":"https://www.youtube.com/watch?v=rqE3NvlcHDY",
  "customCode":"UWaish"
}
```

![Screenshot (58)](https://user-images.githubusercontent.com/49112789/80279667-b98bc380-871c-11ea-9a77-a3ea860986ef.png)


## 3.Get request with shortcode parameter 

```
http://localhost:5000/ShortCode

```


![Screenshot (60)](https://user-images.githubusercontent.com/49112789/80280126-c3fb8c80-871f-11ea-802d-0a079da7473c.png)



## Results
`node index.js`

```
{
  "success": true,
  "shortUrl": "qhArBq"
}
```





