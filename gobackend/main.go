package main

import (
	"github/com/gorilla/websocket"
	"log"
	"net/http"
)

/*
func main() {
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprintf(res, "hello world")
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
*/

func Server() {
	http.HandleFunc("/ws", func(res http.ResponseWriter, req *http.Request) {
		ws, err := Handler(res, req)
		if err != nil {
			// handle error
		}
		if err = ws.Handshake(); err != nil {
			// handle ws handshake error
		}
	})
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

// handler
func Handler(res http.ResponseWriter, req *http.Request) {
	conn, err := upgrader.Upgrade(res, req, nil)

	if err != nil {
		log.Println(err)
		return
	}

	//otherwise use connection to send and recieve messages
	// loop
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		// if error write message
		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}

}

func main() {

	Server()

	log.Fatal(http.ListenAndServe(":8080", nil))
}
