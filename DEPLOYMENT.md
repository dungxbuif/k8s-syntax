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

## GitLab delivery

GitLab CI runs `npm test` on branches and merge requests. A `dev-*`,
`staging-*`, or `prod-*` tag must point to a commit reachable from the
protected `main` branch before CI publishes an immutable image to the GitLab
Container Registry. Only a protected, manual `prod-*` job updates the existing
Swarm service, and the job verifies `/healthz` afterwards. Runtime variables
are project-scoped masked/protected variables:

- `K8S_SYNTAX_SWARM_MANAGER_HOST`
- `K8S_SYNTAX_SWARM_MANAGER_USER`
- `K8S_SYNTAX_SWARM_SSH_PRIVATE_KEY`
- `K8S_SYNTAX_SWARM_KNOWN_HOSTS`

Do not tag a feature branch for production and do not deploy a mutable image
tag; the pipeline uses the registry digest returned by the build job.
