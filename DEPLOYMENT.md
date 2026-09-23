# K8s Syntax deployment

## Production

- Domain: `https://k8s-syntax.dungxbuif.com`
- Runtime: Docker Swarm service `k8s-syntax`
- Node: `vm100-prod`
- Image: `homelab/k8s-syntax:214b585`
- Network: `homelab-net`
- Published host ports: none
- Edge route: Pi Traefik file-provider router `k8s-syntax`
- Upstream: `http://tasks.k8s-syntax:80`

## Verify

```bash
docker service ps k8s-syntax
curl -k --resolve k8s-syntax.dungxbuif.com:443:10.10.0.5 https://k8s-syntax.dungxbuif.com/healthz
```

The app is static and stores attempts only in browser LocalStorage under
`k8s-syntax-v1`.
