// Command israel-andersen-portfolio sirve el portafolio (frontend/dist)
// como plugin de Asterion. No tiene API ni estado: solo archivos estáticos
// y el health check que exige el contrato asterion.plugin/v1.
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	const distDir = "./frontend/dist"
	port := os.Getenv("ASTERION_PLUGIN_PORT")
	if port == "" {
		port = "8049"
	}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, _ *http.Request) {
		// Sin build el proceso igual está vivo (2xx), pero se reporta
		// degraded para que el dashboard muestre qué falta.
		body := map[string]string{"status": "healthy"}
		if _, err := os.Stat(filepath.Join(distDir, "index.html")); err != nil {
			body = map[string]string{
				"status": "degraded",
				"detail": "frontend sin compilar: ejecuta 'asterion plugin build israel-andersen-portfolio'",
			}
		}
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(body)
	})
	mux.Handle("/", http.FileServer(http.Dir(distDir)))

	log.Printf("portafolio en http://127.0.0.1:%s (sirviendo %s)", port, distDir)
	log.Fatal(http.ListenAndServe("127.0.0.1:"+port, mux))
}
