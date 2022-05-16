# SD-Homeworks2
## Integrantes: Ze Hui Fu y Joaquín Fernández.
**Instrucciones y uso**
```bash
git clone https://github.com/Joako-Sador/SD-Homeworks2.git
```

**Configuración de Redis**

Se utiliza la imagen de redis: ```redis:6.2.6```

Se declara el puerto 6379 que utilizará la imagen de redis.

Para configurar Redis con las distintas politiicas de remoción (LRU / LFU) y memoria máxima de cache que esta pueda almacenar se puede realizar de dos formas:

1. Se debe definir un comando para que Redis inicie su servidor con los parametros de politica de remoción y memoria máxima deseados:

```docker
command: ["redis-server", "--bind", "redis","--maxmemory 893300","--maxmemory-policy allkeys-lru"]
```

2. Ingresar al docker exec del contenedor y entrar al cliente de Redis para luego editar la memoria maxima y la politica:

```bash
docker exec -it <nombre_container> sh
```

```bash
redis-cli -u redis://<nombre_container>
```

```bash
CONFIG SET maxmemory <memoria_deseada>
```

```bash
CONFIG SET maxmemory-policy <allkeys-lru /allkeys-lfu>
```

**Método search**

El método search ejerce la acción de buscar en la base de datos o cache, dado un string.

```sh
http://localhost:4000/inventory/search/?q=<palabra a buscar>
```

**Finalmente para ejecutar el SW se recomienda usar el siguiente comando**

 ```bash
docker-compose up
```

Cabe hacer mención que unos cuantos scripts del trabajo son extraidos de ejemplos practicos vistos en ayudantía. Gracias por su atención.
