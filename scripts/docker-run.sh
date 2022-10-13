#!/bin/sh
docker run -v $(pwd):/app -it --rm --name react-vite -p 5173:5173 ghalex/react-vite:dev