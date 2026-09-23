# K8s Syntax deployment

## Production

- Domain: `https://k8s-syntax.dungxbuif.com`
- Runtime: Docker Swarm service `k8s-syntax`
- Node: `vm100-prod`
- Image: `homelab/k8s-syntax:1921819`
- Network: `homelab-net`
- Published host ports: none
- Edge route: Pi Traefik file-provider router `k8s-syntax`
- Upstream: `http://tasks.k8s-syntax:80`
- Public exposure also requires `k8s-syntax.dungxbuif.com` in the VPS
  `gateway-traefik` `rathole-passthrough` HostSNI allow-list.

## Verify

```bash
docker service ps k8s-syntax
curl -k --resolve k8s-syntax.dungxbuif.com:443:10.10.0.5 https://k8s-syntax.dungxbuif.com/healthz
curl -k --resolve k8s-syntax.dungxbuif.com:443:10.10.0.5 -I https://k8s-syntax.dungxbuif.com/src/app.mjs
```

The app is static and stores attempts only in browser LocalStorage under
`k8s-syntax-v1`.
