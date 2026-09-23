// Generated from kubectl v1.36.1 --help output on 2026-09-24.
// Global options and all discoverable built-in command/subcommand option blocks are included.

export const KUBECTL_VERSION = "v1.36.1";
export const KUBECTL_SOURCE = "local kubectl --help recursive snapshot";
export const GLOBAL_OPTIONS = [
  {
    "flag": "-h, --help",
    "description": "Print help for the selected command."
  },
  {
    "flag": "--as=''",
    "description": "Username to impersonate for the operation. User could be a regular user or a service account in a namespace."
  },
  {
    "flag": "--as-group=[]",
    "description": "Group to impersonate for the operation, this flag can be repeated to specify multiple groups."
  },
  {
    "flag": "--as-uid=''",
    "description": "UID to impersonate for the operation."
  },
  {
    "flag": "--as-user-extra=[]",
    "description": "User extras to impersonate for the operation, this flag can be repeated to specify multiple values for the same key."
  },
  {
    "flag": "--cache-dir='~/.kube/cache'",
    "description": "Default cache directory"
  },
  {
    "flag": "--certificate-authority=''",
    "description": "Path to a cert file for the certificate authority"
  },
  {
    "flag": "--client-certificate=''",
    "description": "Path to a client certificate file for TLS"
  },
  {
    "flag": "--client-key=''",
    "description": "Path to a client key file for TLS"
  },
  {
    "flag": "--cluster=''",
    "description": "The name of the kubeconfig cluster to use"
  },
  {
    "flag": "--context=''",
    "description": "The name of the kubeconfig context to use"
  },
  {
    "flag": "--disable-compression=false",
    "description": "If true, opt-out of response compression for all requests to the server"
  },
  {
    "flag": "--insecure-skip-tls-verify=false",
    "description": "If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure"
  },
  {
    "flag": "--kubeconfig=''",
    "description": "Path to the kubeconfig file to use for CLI requests."
  },
  {
    "flag": "--kuberc=''",
    "description": "Path to the kuberc file to use for preferences. This can be disabled by exporting KUBECTL_KUBERC=false feature gate or turning off the feature KUBERC=off."
  },
  {
    "flag": "--log-flush-frequency=5s",
    "description": "Maximum number of seconds between log flushes"
  },
  {
    "flag": "--match-server-version=false",
    "description": "Require server version to match client version"
  },
  {
    "flag": "-n, --namespace=''",
    "description": "If present, the namespace scope for this CLI request"
  },
  {
    "flag": "--password=''",
    "description": "Password for basic authentication to the API server"
  },
  {
    "flag": "--profile='none'",
    "description": "Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex|trace)"
  },
  {
    "flag": "--profile-output='profile.pprof'",
    "description": "Name of the file to write the profile to"
  },
  {
    "flag": "--request-timeout='0'",
    "description": "The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don't timeout requests."
  },
  {
    "flag": "-s, --server=''",
    "description": "The address and port of the Kubernetes API server"
  },
  {
    "flag": "--tls-server-name=''",
    "description": "Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used"
  },
  {
    "flag": "--token=''",
    "description": "Bearer token for authentication to the API server"
  },
  {
    "flag": "--user=''",
    "description": "The name of the kubeconfig user to use"
  },
  {
    "flag": "--username=''",
    "description": "Username for basic authentication to the API server"
  },
  {
    "flag": "-v, --v=0",
    "description": "number for the log level verbosity"
  },
  {
    "flag": "--vmodule=",
    "description": "comma-separated list of pattern=N settings for file-filtered logging (only works for the default text log format)"
  },
  {
    "flag": "--warnings-as-errors=false",
    "description": "Treat warnings received from the server as errors and exit with a non-zero exit code"
  }
];
export const COMMAND_OPTIONS = {
  "create": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--edit=false",
      "description": "Edit the API resource before creating"
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files to use to create the resource"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--raw=''",
      "description": "Raw URI to POST to the server. Uses the transport specified by the kubeconfig file."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--windows-line-endings=false",
      "description": "Only relevant if --edit=true. Defaults to the line ending native to your platform."
    }
  ],
  "expose": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--cluster-ip=''",
      "description": "ClusterIP to be assigned to the service. Leave empty to auto-allocate, or set to 'None' to create a headless service."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--external-ip=''",
      "description": "Additional external IP address (not managed by Kubernetes) to accept for the service. If this IP is routed to a node, the service can be accessed by this IP in addition to its generated service IP."
    },
    {
      "flag": "--field-manager='kubectl-expose'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to expose a service"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-l, --labels=''",
      "description": "Labels to apply to the service created by this call."
    },
    {
      "flag": "--load-balancer-ip=''",
      "description": "IP to assign to the LoadBalancer. If empty, an ephemeral IP will be created and used (cloud-provider specific)."
    },
    {
      "flag": "--name=''",
      "description": "The name for the newly created object."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--override-type='merge'",
      "description": "The method used to override the generated object: json, merge, or strategic."
    },
    {
      "flag": "--overrides=''",
      "description": "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field."
    },
    {
      "flag": "--port=''",
      "description": "The port that the service should serve on. Copied from the resource being exposed, if unspecified"
    },
    {
      "flag": "--protocol=''",
      "description": "The network protocol for the service to be created. Default is 'TCP'."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--selector=''",
      "description": "A label selector to use for this service. Only equality-based selector requirements are supported. If empty (the default) infer the selector from the resource being exposed."
    },
    {
      "flag": "--session-affinity=''",
      "description": "If non-empty, set the session affinity for the service to this; legal values: 'None', 'ClientIP'"
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--target-port=''",
      "description": "Name or number for the port on the container that the service should direct traffic to. Optional."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--type=''",
      "description": "Type for this service: ClusterIP, NodePort, LoadBalancer, or ExternalName. Default is 'ClusterIP'."
    }
  ],
  "run": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--annotations=[]",
      "description": "Annotations to apply to the pod."
    },
    {
      "flag": "--attach=false",
      "description": "If true, wait for the Pod to start running, and then attach to the Pod as if 'kubectl attach ...' were called. Default false, unless '-i/--stdin' is set, in which case the default is true. With '--restart=Never' the exit code of the container process is returned."
    },
    {
      "flag": "--cascade='background'",
      "description": "Must be \"background\", \"orphan\", or \"foreground\". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background."
    },
    {
      "flag": "--command=false",
      "description": "If true and extra arguments are present, use them as the 'command' field in the container, rather than the 'args' field which is the default."
    },
    {
      "flag": "--detach-keys='ctrl-p,ctrl-q'",
      "description": "Override the key sequence for detaching a container."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--env=[]",
      "description": "Environment variables to set in the container."
    },
    {
      "flag": "--expose=false",
      "description": "If true, create a ClusterIP service associated with the pod. Requires `--port`."
    },
    {
      "flag": "--field-manager='kubectl-run'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "to use to replace the resource."
    },
    {
      "flag": "--force=false",
      "description": "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation."
    },
    {
      "flag": "--grace-period=-1",
      "description": "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)."
    },
    {
      "flag": "--image=''",
      "description": "The image for the container to run."
    },
    {
      "flag": "--image-pull-policy=''",
      "description": "The image pull policy for the container. If left empty, this value will not be specified by the client and defaulted by the server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process a kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-l, --labels=''",
      "description": "Comma separated labels to apply to the pod. Will override previous values."
    },
    {
      "flag": "--leave-stdin-open=false",
      "description": "If the pod is started in interactive mode or with stdin, leave stdin open after the first attach completes. By default, stdin will be closed after the first attach completes."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--override-type='merge'",
      "description": "The method used to override the generated object: json, merge, or strategic."
    },
    {
      "flag": "--overrides=''",
      "description": "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field."
    },
    {
      "flag": "--pod-running-timeout=1m0s",
      "description": "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running"
    },
    {
      "flag": "--port=''",
      "description": "The port that this container exposes."
    },
    {
      "flag": "--privileged=false",
      "description": "If true, run the container in privileged mode."
    },
    {
      "flag": "-q, --quiet=false",
      "description": "If true, suppress prompt messages."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--restart='Always'",
      "description": "The restart policy for this Pod. Legal values [Always, OnFailure, Never]."
    },
    {
      "flag": "--rm=false",
      "description": "If true, delete the pod after it exits. Only valid when attaching to the container, e.g. with '--attach' or with '-i/--stdin'."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "-i, --stdin=false",
      "description": "Keep stdin open on the container in the pod, even if nothing is attached."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--timeout=0s",
      "description": "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object"
    },
    {
      "flag": "-t, --tty=false",
      "description": "Allocate a TTY for the container in the pod."
    },
    {
      "flag": "--wait=false",
      "description": "If true, wait for resources to be gone before returning. This waits for finalizers."
    }
  ],
  "set": [],
  "explain": [
    {
      "flag": "--api-version=''",
      "description": "Get different explanations for particular API version (API group/version)"
    },
    {
      "flag": "-o, --output='plaintext'",
      "description": "Format in which to render the schema (plaintext, plaintext-openapiv2)"
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Print the fields of fields (Currently only 1 level deep)"
    }
  ],
  "get": [
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--chunk-size=500",
      "description": "Return large lists in chunks rather than all at once. Pass 0 to disable."
    },
    {
      "flag": "--field-selector=''",
      "description": "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "--ignore-not-found=false",
      "description": "If set to true, suppresses NotFound error for specific objects that do not exist. Using this flag with commands that query for collections of resources has no effect when no resources are found."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-L, --label-columns=[]",
      "description": "Accepts a comma separated list of labels that are going to be presented as columns. Names are case-sensitive. You can also use multiple flag options like -L label1 -L label2..."
    },
    {
      "flag": "--no-headers=false",
      "description": "When using the default or custom-column output format, don't print headers (default print headers)."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file, custom-columns, custom-columns-file, wide). See custom columns [https://kubernetes.io/docs/reference/kubectl/#custom-columns], golang template [http://golang.org/pkg/text/template/#pkg-overview] and jsonpath template [https://kubernetes.io/docs/reference/kubectl/jsonpath/]."
    },
    {
      "flag": "--output-watch-events=false",
      "description": "Output watch event objects when --watch or --watch-only is used. Existing objects are output as initial ADDED events."
    },
    {
      "flag": "--raw=''",
      "description": "Raw URI to request from the server. Uses the transport specified by the kubeconfig file."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--server-print=true",
      "description": "If true, have the server return the appropriate table output. Supports extension APIs and CRDs."
    },
    {
      "flag": "--show-kind=false",
      "description": "If present, list the resource type for the requested object(s)."
    },
    {
      "flag": "--show-labels=false",
      "description": "When printing, show all labels as the last column (default hide labels column)"
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--sort-by=''",
      "description": "If non-empty, sort list types using this field specification. The field specification is expressed as a JSONPath expression (e.g. '{.metadata.name}'). The field in the API resource specified by this JSONPath expression must be an integer or a string."
    },
    {
      "flag": "--subresource=''",
      "description": "If specified, gets the subresource of the requested object."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "-w, --watch=false",
      "description": "After listing/getting the requested object, watch for changes."
    },
    {
      "flag": "--watch-only=false",
      "description": "Watch for changes to the requested object(s), without listing/getting first."
    }
  ],
  "edit": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--field-manager='kubectl-edit'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files to use to edit the resource"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--output-patch=false",
      "description": "Output the patch if the resource is edited."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--subresource=''",
      "description": "If specified, edit will operate on the subresource of the requested object."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--windows-line-endings=false",
      "description": "Defaults to the line ending native to your platform."
    }
  ],
  "delete": [
    {
      "flag": "--all=false",
      "description": "Delete all resources, in the namespace of the specified resource types."
    },
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace."
    },
    {
      "flag": "--cascade='background'",
      "description": "Must be \"background\", \"orphan\", or \"foreground\". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-selector=''",
      "description": "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "containing the resource to delete."
    },
    {
      "flag": "--force=false",
      "description": "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation."
    },
    {
      "flag": "--grace-period=-1",
      "description": "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)."
    },
    {
      "flag": "--ignore-not-found=false",
      "description": "Treat \"resource not found\" as a successful delete. Defaults to \"true\" when --all is specified."
    },
    {
      "flag": "-i, --interactive=false",
      "description": "If true, delete resource only when user confirms."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process a kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--now=false",
      "description": "If true, resources are signaled for immediate shutdown (same as --grace-period=1)."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output mode. Use \"-o name\" for shorter output (resource/name)."
    },
    {
      "flag": "--raw=''",
      "description": "Raw URI to DELETE to the server. Uses the transport specified by the kubeconfig file."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--timeout=0s",
      "description": "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object"
    },
    {
      "flag": "--wait=true",
      "description": "If true, wait for resources to be gone before returning. This waits for finalizers."
    }
  ],
  "rollout": [],
  "scale": [
    {
      "flag": "--all=false",
      "description": "Select all resources in the namespace of the specified resource types"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--current-replicas=-1",
      "description": "Precondition for current size. Requires that the current size of the resource match this value in order to scale. -1 (default) for no condition."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to set a new size"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--replicas=0",
      "description": "The new desired number of replicas. Required."
    },
    {
      "flag": "--resource-version=''",
      "description": "Precondition for resource version. Requires that the current resource version match this value in order to scale."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--timeout=0s",
      "description": "The length of time to wait before giving up on a scale operation, zero means don't wait. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h)."
    }
  ],
  "autoscale": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--cpu=''",
      "description": "Target CPU utilization over all the pods. When specified as a percentage (e.g.\"70%\" for 70% of requested CPU) it will target average utilization. When specified as quantity (e.g.\"500m\" for 500 milliCPU) it will target average value. Value without units is treated as a quantity with miliCPU being the unit (e.g.\"500\" is \"500m\")."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-autoscale'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to autoscale."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--max=-1",
      "description": "The upper limit for the number of pods that can be set by the autoscaler. Required."
    },
    {
      "flag": "--memory=''",
      "description": "Target memory utilization over all the pods. When specified as a percentage (e.g.\"60%\" for 60% of requested memory) it will target average utilization. When specified as quantity (e.g.\"200Mi\" for 200 MiB, \"1Gi\" for 1 GiB) it will target average value. Value without units is treated as a quantity with mebibytes being the unit (e.g.\"200\" is \"200Mi\")."
    },
    {
      "flag": "--min=-1",
      "description": "The lower limit for the number of pods that can be set by the autoscaler. If it's not specified or negative, the server will apply a default value."
    },
    {
      "flag": "--name=''",
      "description": "The name for the newly created object. If not specified, the name of the input resource will be used."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "certificate": [],
  "cluster-info": [],
  "top": [],
  "cordon": [
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    }
  ],
  "uncordon": [
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    }
  ],
  "drain": [
    {
      "flag": "--chunk-size=500",
      "description": "Return large lists in chunks rather than all at once. Pass 0 to disable."
    },
    {
      "flag": "--delete-emptydir-data=false",
      "description": "Continue even if there are pods using emptyDir (local data that will be deleted when the node is drained)."
    },
    {
      "flag": "--disable-eviction=false",
      "description": "Force drain to use delete, even if eviction is supported. This will bypass checking PodDisruptionBudgets, use with caution."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--force=false",
      "description": "Continue even if there are pods that do not declare a controller."
    },
    {
      "flag": "--grace-period=-1",
      "description": "Period of time in seconds given to each pod to terminate gracefully. If negative, the default value specified in the pod will be used."
    },
    {
      "flag": "--ignore-daemonsets=false",
      "description": "Ignore DaemonSet-managed pods."
    },
    {
      "flag": "--pod-selector=''",
      "description": "Label selector to filter pods on the node"
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--skip-wait-for-delete-timeout=0",
      "description": "If pod DeletionTimestamp older than N seconds, skip waiting for the pod. Seconds must be greater than 0 to skip."
    },
    {
      "flag": "--timeout=0s",
      "description": "The length of time to wait before giving up, zero means infinite"
    }
  ],
  "taint": [
    {
      "flag": "--all=false",
      "description": "Select all nodes in the cluster"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-taint'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--overwrite=false",
      "description": "If true, allow taints to be overwritten, otherwise reject taint updates that overwrite existing taints."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "describe": [
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace."
    },
    {
      "flag": "--chunk-size=500",
      "description": "Return large lists in chunks rather than all at once. Pass 0 to disable."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files containing the resource to describe"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-events=true",
      "description": "If true, display events related to the described object. Defaults to true for a single object, false for multiple objects and prefix matching."
    }
  ],
  "logs": [
    {
      "flag": "--all-containers=false",
      "description": "Get all containers' logs in the pod(s)."
    },
    {
      "flag": "--all-pods=false",
      "description": "Get logs from all pod(s). Sets prefix to true."
    },
    {
      "flag": "-c, --container=''",
      "description": "Print the logs of this container"
    },
    {
      "flag": "-f, --follow=false",
      "description": "Specify if the logs should be streamed."
    },
    {
      "flag": "--ignore-errors=false",
      "description": "If watching / following pod logs, allow for any errors that occur to be non-fatal"
    },
    {
      "flag": "--insecure-skip-tls-verify-backend=false",
      "description": "Skip verifying the identity of the kubelet that logs are requested from. In theory, an attacker could provide invalid log content back. You might want to use this if your kubelet serving certificates have expired."
    },
    {
      "flag": "--limit-bytes=0",
      "description": "Maximum bytes of logs to return. Defaults to no limit."
    },
    {
      "flag": "--max-log-requests=5",
      "description": "Specify maximum number of concurrent logs to follow when using by a selector. Defaults to 5."
    },
    {
      "flag": "--pod-running-timeout=20s",
      "description": "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running"
    },
    {
      "flag": "--prefix=false",
      "description": "Prefix each log line with the log source (pod name and container name)"
    },
    {
      "flag": "-p, --previous=false",
      "description": "If true, print the logs for the previous instance of the container in a pod if it exists."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--since=0s",
      "description": "Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used."
    },
    {
      "flag": "--since-time=''",
      "description": "Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used."
    },
    {
      "flag": "--tail=-1",
      "description": "Lines of recent log file to display. Defaults to -1 with no selector, showing all log lines otherwise 10, if a selector is provided."
    },
    {
      "flag": "--timestamps=false",
      "description": "Include timestamps on each line in the log output"
    }
  ],
  "attach": [
    {
      "flag": "-c, --container=''",
      "description": "Container name. If omitted, use the kubectl.kubernetes.io/default-container annotation for selecting the container to be attached or the first container in the pod will be chosen"
    },
    {
      "flag": "--detach-keys='ctrl-p,ctrl-q'",
      "description": "Override the key sequence for detaching a container"
    },
    {
      "flag": "--pod-running-timeout=1m0s",
      "description": "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running"
    },
    {
      "flag": "-q, --quiet=false",
      "description": "Only print output from the remote session"
    },
    {
      "flag": "-i, --stdin=false",
      "description": "Pass stdin to the container"
    },
    {
      "flag": "-t, --tty=false",
      "description": "Stdin is a TTY"
    }
  ],
  "exec": [
    {
      "flag": "-c, --container=''",
      "description": "Container name. If omitted, use the kubectl.kubernetes.io/default-container annotation for selecting the container to be attached or the first container in the pod will be chosen"
    },
    {
      "flag": "-f, --filename=[]",
      "description": "to use to exec into the resource"
    },
    {
      "flag": "--pod-running-timeout=1m0s",
      "description": "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running"
    },
    {
      "flag": "-q, --quiet=false",
      "description": "Only print output from the remote session"
    },
    {
      "flag": "-i, --stdin=false",
      "description": "Pass stdin to the container"
    },
    {
      "flag": "-t, --tty=false",
      "description": "Stdin is a TTY"
    }
  ],
  "port-forward": [
    {
      "flag": "--address=[localhost]",
      "description": "Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, kubectl will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind."
    },
    {
      "flag": "--pod-running-timeout=1m0s",
      "description": "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running"
    }
  ],
  "proxy": [
    {
      "flag": "--accept-hosts='^localhost$,^127\\.0\\.0\\.1$,^\\[::1\\]$'",
      "description": "Regular expression for hosts that the proxy should accept."
    },
    {
      "flag": "--accept-paths='^.*'",
      "description": "Regular expression for paths that the proxy should accept."
    },
    {
      "flag": "--address='127.0.0.1'",
      "description": "The IP address on which to serve on."
    },
    {
      "flag": "--api-prefix='/'",
      "description": "Prefix to serve the proxied API under."
    },
    {
      "flag": "--append-server-path=false",
      "description": "If true, enables automatic path appending of the kube context server path to each request."
    },
    {
      "flag": "--disable-filter=false",
      "description": "If true, disable request filtering in the proxy. This is dangerous, and can leave you vulnerable to XSRF attacks, when used with an accessible port."
    },
    {
      "flag": "--keepalive=0s",
      "description": "keepalive specifies the keep-alive period for an active network connection. Set to 0 to disable keepalive."
    },
    {
      "flag": "-p, --port=8001",
      "description": "The port on which to run the proxy. Set to 0 to pick a random port."
    },
    {
      "flag": "--reject-methods='^$'",
      "description": "Regular expression for HTTP methods that the proxy should reject (example --reject-methods='POST,PUT,PATCH')."
    },
    {
      "flag": "--reject-paths='^/api/.*/pods/.*/exec,^/api/.*/pods/.*/attach'",
      "description": "Regular expression for paths that the proxy should reject. Paths specified here will be rejected even accepted by --accept-paths."
    },
    {
      "flag": "-u, --unix-socket=''",
      "description": "Unix socket on which to run the proxy."
    },
    {
      "flag": "-w, --www=''",
      "description": "Also serve static files from the given directory under the specified prefix."
    },
    {
      "flag": "-P, --www-prefix='/static/'",
      "description": "Prefix to serve static files under, if static file directory is specified."
    }
  ],
  "cp": [
    {
      "flag": "-c, --container=''",
      "description": "Container name. If omitted, use the kubectl.kubernetes.io/default-container annotation for selecting the container to be attached or the first container in the pod will be chosen"
    },
    {
      "flag": "--no-preserve=false",
      "description": "The copied file/directory's ownership and permissions will not be preserved in the container"
    },
    {
      "flag": "--retries=0",
      "description": "Set number of retries to complete a copy operation from a container. Specify 0 to disable or any negative value for infinite retrying. The default is 0 (no retry)."
    }
  ],
  "auth": [],
  "debug": [
    {
      "flag": "--arguments-only=false",
      "description": "If specified, everything after -- will be passed to the new container as Args instead of Command."
    },
    {
      "flag": "--attach=false",
      "description": "If true, wait for the container to start running, and then attach as if 'kubectl attach ...' were called. Default false, unless '-i/--stdin' is set, in which case the default is true."
    },
    {
      "flag": "-c, --container=''",
      "description": "Container name to use for debug container."
    },
    {
      "flag": "--copy-to=''",
      "description": "Create a copy of the target Pod with this name."
    },
    {
      "flag": "--custom=''",
      "description": "Path to a JSON or YAML file containing a partial container spec to customize built-in debug profiles."
    },
    {
      "flag": "--env=[]",
      "description": "Environment variables to set in the container."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "identifying the resource to debug"
    },
    {
      "flag": "--image=''",
      "description": "Container image to use for debug container."
    },
    {
      "flag": "--image-pull-policy=''",
      "description": "The image pull policy for the container. If left empty, this value will not be specified by the client and defaulted by the server."
    },
    {
      "flag": "--keep-annotations=false",
      "description": "If true, keep the original pod annotations.(This flag only works when used with '--copy-to')"
    },
    {
      "flag": "--keep-init-containers=true",
      "description": "Run the init containers for the pod. Defaults to true.(This flag only works when used with '--copy-to')"
    },
    {
      "flag": "--keep-labels=false",
      "description": "If true, keep the original pod labels.(This flag only works when used with '--copy-to')"
    },
    {
      "flag": "--keep-liveness=false",
      "description": "If true, keep the original pod liveness probes.(This flag only works when used with '--copy-to')"
    },
    {
      "flag": "--keep-readiness=false",
      "description": "If true, keep the original pod readiness probes.(This flag only works when used with '--copy-to')"
    },
    {
      "flag": "--keep-startup=false",
      "description": "If true, keep the original startup probes.(This flag only works when used with '--copy-to')"
    },
    {
      "flag": "--profile='general'",
      "description": "Options are \"general\", \"baseline\", \"restricted\", \"netadmin\" or \"sysadmin\". Defaults to \"general\""
    },
    {
      "flag": "-q, --quiet=false",
      "description": "If true, suppress informational messages."
    },
    {
      "flag": "--replace=false",
      "description": "When used with '--copy-to', delete the original Pod."
    },
    {
      "flag": "--same-node=false",
      "description": "When used with '--copy-to', schedule the copy of target Pod on the same node."
    },
    {
      "flag": "--set-image=[]",
      "description": "When used with '--copy-to', a list of name=image pairs for changing container images, similar to how 'kubectl set image' works."
    },
    {
      "flag": "--share-processes=true",
      "description": "When used with '--copy-to', enable process namespace sharing in the copy."
    },
    {
      "flag": "-i, --stdin=false",
      "description": "Keep stdin open on the container(s) in the pod, even if nothing is attached."
    },
    {
      "flag": "--target=''",
      "description": "When using an ephemeral container, target processes in this container name."
    },
    {
      "flag": "-t, --tty=false",
      "description": "Allocate a TTY for the debugging container."
    }
  ],
  "events": [
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--chunk-size=500",
      "description": "Return large lists in chunks rather than all at once. Pass 0 to disable."
    },
    {
      "flag": "--for=''",
      "description": "Filter events to only those pertaining to the specified resource."
    },
    {
      "flag": "--no-headers=false",
      "description": "When using the default output format, don't print headers."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--types=[]",
      "description": "Output only events of given types."
    },
    {
      "flag": "-w, --watch=false",
      "description": "After listing the requested events, watch for more events."
    }
  ],
  "diff": [
    {
      "flag": "--concurrency=1",
      "description": "Number of objects to process in parallel when diffing against the live version. Larger number = faster, but more memory, I/O and CPU over that shorter period of time."
    },
    {
      "flag": "--field-manager='kubectl-client-side-apply'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files contains the configuration to diff"
    },
    {
      "flag": "--force-conflicts=false",
      "description": "If true, server-side apply will force the changes against conflicts."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--prune=false",
      "description": "Include resources that would be deleted by pruning. Can be used with -l and default shows all resources would be pruned"
    },
    {
      "flag": "--prune-allowlist=[]",
      "description": "Overwrite the default allowlist with <group/version/kind> for --prune"
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--server-side=false",
      "description": "If true, apply runs in the server instead of the client."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, include managed fields in the diff."
    },
    {
      "flag": "--show-secrets=false",
      "description": "If true, do not mask secret values in the diff."
    }
  ],
  "apply": [
    {
      "flag": "--all=false",
      "description": "Select all resources in the namespace of the specified resource types."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--cascade='background'",
      "description": "Must be \"background\", \"orphan\", or \"foreground\". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-client-side-apply'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "The files that contain the configurations to apply."
    },
    {
      "flag": "--force=false",
      "description": "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation."
    },
    {
      "flag": "--force-conflicts=false",
      "description": "If true, server-side apply will force the changes against conflicts."
    },
    {
      "flag": "--grace-period=-1",
      "description": "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process a kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--openapi-patch=true",
      "description": "If true, use openapi to calculate diff when the openapi presents and the resource can be found in the openapi spec. Otherwise, fall back to use baked-in types."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--overwrite=true",
      "description": "Automatically resolve conflicts between the modified and live configuration by using values from the modified configuration"
    },
    {
      "flag": "--prune=false",
      "description": "Automatically delete resource objects, that do not appear in the configs and are created by either apply or create --save-config. Should be used with either -l or --all."
    },
    {
      "flag": "--prune-allowlist=[]",
      "description": "Overwrite the default allowlist with <group/version/kind> for --prune"
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--server-side=false",
      "description": "If true, apply runs in the server instead of the client."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--subresource=''",
      "description": "If specified, apply will operate on the subresource of the requested object. Only allowed when using --server-side."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--timeout=0s",
      "description": "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object"
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--wait=false",
      "description": "If true, wait for resources to be gone before returning. This waits for finalizers."
    }
  ],
  "patch": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-patch'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to update"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--local=false",
      "description": "If true, patch will operate on the content of the file, not the server-side resource."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-p, --patch=''",
      "description": "The patch to be applied to the resource JSON file."
    },
    {
      "flag": "--patch-file=''",
      "description": "A file containing a patch to be applied to the resource."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--subresource=''",
      "description": "If specified, patch will operate on the subresource of the requested object."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--type='strategic'",
      "description": "The type of patch being provided; one of [json merge strategic]"
    }
  ],
  "replace": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--cascade='background'",
      "description": "Must be \"background\", \"orphan\", or \"foreground\". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-replace'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "The files that contain the configurations to replace."
    },
    {
      "flag": "--force=false",
      "description": "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation."
    },
    {
      "flag": "--grace-period=-1",
      "description": "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process a kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--raw=''",
      "description": "Raw URI to PUT to the server. Uses the transport specified by the kubeconfig file."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--subresource=''",
      "description": "If specified, replace will operate on the subresource of the requested object."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--timeout=0s",
      "description": "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object"
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--wait=false",
      "description": "If true, wait for resources to be gone before returning. This waits for finalizers."
    }
  ],
  "wait": [
    {
      "flag": "--all=false",
      "description": "Select all resources in the namespace of the specified resource types"
    },
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--field-selector=''",
      "description": "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "identifying the resource."
    },
    {
      "flag": "--for=[]",
      "description": "The condition to wait on: [create|delete|condition=condition-name[=condition-value]|jsonpath='{JSONPath expression}'=[JSONPath value]]. The default condition-value is true. Condition values are compared after Unicode simple case folding, which is a more general form of case-insensitivity. Multiple conditions are supported and AND'ed to each other in a sequential order. If --for=create is passed, it is always waited first."
    },
    {
      "flag": "--local=false",
      "description": "If true, annotation will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=true",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)"
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--timeout=30s",
      "description": "The length of time to wait before giving up. Zero means check once and don't wait, negative means wait for a week."
    }
  ],
  "kustomize": [
    {
      "flag": "--as-current-user=false",
      "description": "use the uid and gid of the command executor to run the function in the container"
    },
    {
      "flag": "--enable-alpha-plugins=false",
      "description": "enable kustomize plugins"
    },
    {
      "flag": "--enable-helm=false",
      "description": "Enable use of the Helm chart inflator generator."
    },
    {
      "flag": "-e, --env=[]",
      "description": "a list of environment variables to be used by functions"
    },
    {
      "flag": "--helm-api-versions=[]",
      "description": "Kubernetes api versions used by Helm for Capabilities.APIVersions"
    },
    {
      "flag": "--helm-command='helm'",
      "description": "helm command (path to executable)"
    },
    {
      "flag": "--helm-debug=false",
      "description": "Enable debug output from the Helm chart inflator generator."
    },
    {
      "flag": "--helm-kube-version=''",
      "description": "Kubernetes version used by Helm for Capabilities.KubeVersion"
    },
    {
      "flag": "--load-restrictor='LoadRestrictionsRootOnly'",
      "description": "if set to 'LoadRestrictionsNone', local kustomizations may load files from outside their root. This does, however, break the relocatability of the kustomization."
    },
    {
      "flag": "--mount=[]",
      "description": "a list of storage options read from the filesystem"
    },
    {
      "flag": "--network=false",
      "description": "enable network access for functions that declare it"
    },
    {
      "flag": "--network-name='bridge'",
      "description": "the docker network to run the container in"
    },
    {
      "flag": "-o, --output=''",
      "description": "If specified, write output to this path."
    }
  ],
  "label": [
    {
      "flag": "--all=false",
      "description": "Select all resources, in the namespace of the specified resource types"
    },
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If true, check the specified action in all namespaces."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-label'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--field-selector=''",
      "description": "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to update the labels"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--list=false",
      "description": "If true, display the labels for a given resource."
    },
    {
      "flag": "--local=false",
      "description": "If true, label will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--overwrite=false",
      "description": "If true, allow labels to be overwritten, otherwise reject label updates that overwrite existing labels."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--resource-version=''",
      "description": "If non-empty, the labels update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "annotate": [
    {
      "flag": "--all=false",
      "description": "Select all resources, in the namespace of the specified resource types."
    },
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If true, check the specified action in all namespaces."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-annotate'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--field-selector=''",
      "description": "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to update the annotation"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--list=false",
      "description": "If true, display the annotations for a given resource."
    },
    {
      "flag": "--local=false",
      "description": "If true, annotation will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--overwrite=false",
      "description": "If true, allow annotations to be overwritten, otherwise reject annotation updates that overwrite existing annotations."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--resource-version=''",
      "description": "If non-empty, the annotation update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "completion": [],
  "api-resources": [
    {
      "flag": "--api-group=''",
      "description": "Limit to resources in the specified API group."
    },
    {
      "flag": "--cached=false",
      "description": "Use the cached list of resources if available."
    },
    {
      "flag": "--categories=[]",
      "description": "Limit to resources that belong to the specified categories."
    },
    {
      "flag": "--namespaced=true",
      "description": "If false, non-namespaced resources will be returned, otherwise returning namespaced resources by default."
    },
    {
      "flag": "--no-headers=false",
      "description": "When using the default or custom-column output format, don't print headers (default print headers)."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, wide)."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--sort-by=''",
      "description": "If non-empty, sort list of resources using specified field. The field can be either 'name' or 'kind'."
    },
    {
      "flag": "--verbs=[]",
      "description": "Limit to resources that support the specified verbs."
    }
  ],
  "api-versions": [],
  "config": [],
  "kuberc": [],
  "plugin": [],
  "version": [
    {
      "flag": "--client=false",
      "description": "If true, shows client version only (no server required)."
    },
    {
      "flag": "-o, --output=''",
      "description": "One of 'yaml' or 'json'."
    }
  ],
  "create clusterrole": [
    {
      "flag": "--aggregation-rule=",
      "description": "An aggregation label selector for combining ClusterRoles."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--non-resource-url=[]",
      "description": "A partial url that user should have access to."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--resource=[]",
      "description": "Resource that the rule applies to"
    },
    {
      "flag": "--resource-name=[]",
      "description": "Resource in the white list that the rule applies to, repeat this flag for multiple items"
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--verb=[]",
      "description": "Verb that applies to the resources contained in the rule"
    }
  ],
  "create clusterrolebinding": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--clusterrole=''",
      "description": "ClusterRole this ClusterRoleBinding should reference"
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--group=[]",
      "description": "Groups to bind to the clusterrole. The flag can be repeated to add multiple groups."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--serviceaccount=[]",
      "description": "Service accounts to bind to the clusterrole, in the format <namespace>:<name>. The flag can be repeated to add multiple service accounts."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--user=[]",
      "description": "Usernames to bind to the clusterrole. The flag can be repeated to add multiple users."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create configmap": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--append-hash=false",
      "description": "Append a hash of the configmap to its name."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--from-env-file=[]",
      "description": "Specify the path to a file to read lines of key=val pairs to create a configmap."
    },
    {
      "flag": "--from-file=[]",
      "description": "Key file can be specified using its file path, in which case file basename will be used as configmap key, or optionally with a key and file path, in which case the given key will be used. Specifying a directory will iterate each named file in the directory whose basename is a valid configmap key."
    },
    {
      "flag": "--from-literal=[]",
      "description": "Specify a key and literal value to insert in configmap (i.e. mykey=somevalue)"
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create cronjob": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--image=''",
      "description": "Image name to run."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--restart=''",
      "description": "job's restart policy. supported values: OnFailure, Never"
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--schedule=''",
      "description": "A schedule in the Cron format the job should be run with."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create deployment": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--image=[]",
      "description": "Image names to run. A deployment can have multiple images set for multi-container pod."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--port=-1",
      "description": "The containerPort that this deployment exposes."
    },
    {
      "flag": "-r, --replicas=1",
      "description": "Number of replicas to create. Default is 1."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create ingress": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--annotation=[]",
      "description": "Annotation to insert in the ingress object, in the format annotation=value"
    },
    {
      "flag": "--class=''",
      "description": "Ingress Class to be used"
    },
    {
      "flag": "--default-backend=''",
      "description": "Default service for backend, in format of svcname:port"
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--rule=[]",
      "description": "Rule in format host/path=service:port[,tls=secretname]. Paths containing the leading character '*' are considered pathType=Prefix. tls argument is optional."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create job": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--from=''",
      "description": "The name of the resource to create a Job from (only CronJob is supported)."
    },
    {
      "flag": "--image=''",
      "description": "Image name to run."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create namespace": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create poddisruptionbudget": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--max-unavailable=''",
      "description": "The maximum number or percentage of unavailable pods this budget requires."
    },
    {
      "flag": "--min-available=''",
      "description": "The minimum number or percentage of available pods this budget requires."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--selector=''",
      "description": "A label selector to use for this budget. Only equality-based selector requirements are supported."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create priorityclass": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--description=''",
      "description": "description is an arbitrary string that usually provides guidelines on when this priority class should be used."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--global-default=false",
      "description": "global-default specifies whether this PriorityClass should be considered as the default priority."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--preemption-policy='PreemptLowerPriority'",
      "description": "preemption-policy is the policy for preempting pods with lower priority."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--value=0",
      "description": "the value of this priority class."
    }
  ],
  "create quota": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--hard=''",
      "description": "A comma-delimited set of resource=quantity pairs that define a hard limit."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--scopes=''",
      "description": "A comma-delimited set of quota scopes that must all match each object tracked by the quota."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create role": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--resource=[]",
      "description": "Resource that the rule applies to"
    },
    {
      "flag": "--resource-name=[]",
      "description": "Resource in the white list that the rule applies to, repeat this flag for multiple items"
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--verb=[]",
      "description": "Verb that applies to the resources contained in the rule"
    }
  ],
  "create rolebinding": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--clusterrole=''",
      "description": "ClusterRole this RoleBinding should reference"
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--group=[]",
      "description": "Groups to bind to the role. The flag can be repeated to add multiple groups."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--role=''",
      "description": "Role this RoleBinding should reference"
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--serviceaccount=[]",
      "description": "Service accounts to bind to the role, in the format <namespace>:<name>. The flag can be repeated to add multiple service accounts."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--user=[]",
      "description": "Usernames to bind to the role. The flag can be repeated to add multiple users."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create secret": [],
  "create service": [],
  "create serviceaccount": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create token": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--audience=[]",
      "description": "Audience of the requested token. If unset, defaults to requesting a token for use with the Kubernetes API server. May be repeated to request a token valid for multiple audiences."
    },
    {
      "flag": "--bound-object-kind=''",
      "description": "Kind of an object to bind the token to. Supported kinds are Node, Pod, Secret. If set, --bound-object-name must be provided."
    },
    {
      "flag": "--bound-object-name=''",
      "description": "Name of an object to bind the token to. The token will expire when the object is deleted. Requires --bound-object-kind."
    },
    {
      "flag": "--bound-object-uid=''",
      "description": "UID of an object to bind the token to. Requires --bound-object-kind and --bound-object-name. If unset, the UID of the existing object is used."
    },
    {
      "flag": "--duration=0s",
      "description": "Requested lifetime of the issued token. If not set or if set to 0, the lifetime will be determined by the server automatically. The server may return a token with a longer or shorter lifetime."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "set env": [
    {
      "flag": "--all=false",
      "description": "If true, select all resources in the namespace of the specified resource types"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "-c, --containers='*'",
      "description": "The names of containers in the selected pod templates to change - may use wildcards"
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "-e, --env=[]",
      "description": "Specify a key-value pair for an environment variable to set into each container."
    },
    {
      "flag": "--field-manager='kubectl-set'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files the resource to update the env"
    },
    {
      "flag": "--from=''",
      "description": "The name of a resource from which to inject environment variables"
    },
    {
      "flag": "--keys=[]",
      "description": "Comma-separated list of keys to import from specified resource"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--list=false",
      "description": "If true, display the environment and any changes in the standard format. this flag will removed when we have kubectl view env."
    },
    {
      "flag": "--local=false",
      "description": "If true, set env will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--overwrite=true",
      "description": "If true, allow environment to be overwritten, otherwise reject updates that overwrite existing environment."
    },
    {
      "flag": "--prefix=''",
      "description": "Prefix to append to variable names"
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--resolve=false",
      "description": "If true, show secret or configmap references when listing variables"
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "set image": [
    {
      "flag": "--all=false",
      "description": "Select all resources, in the namespace of the specified resource types"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-set'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--local=false",
      "description": "If true, set image will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "set resources": [
    {
      "flag": "--all=false",
      "description": "Select all resources, in the namespace of the specified resource types"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "-c, --containers='*'",
      "description": "The names of containers in the selected pod templates to change, all containers are selected by default - may use wildcards"
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-set'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--limits=''",
      "description": "The resource requirement requests for this container. For example, 'cpu=100m,memory=256Mi'. Note that server side components may assign requests depending on the server configuration, such as limit ranges."
    },
    {
      "flag": "--local=false",
      "description": "If true, set resources will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--requests=''",
      "description": "The resource requirement requests for this container. For example, 'cpu=100m,memory=256Mi'. Note that server side components may assign requests depending on the server configuration, such as limit ranges."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "set selector": [
    {
      "flag": "--all=false",
      "description": "Select all resources in the namespace of the specified resource types"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-set'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "identifying the resource."
    },
    {
      "flag": "--local=false",
      "description": "If true, annotation will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=true",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--resource-version=''",
      "description": "If non-empty, the selectors update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "set serviceaccount": [
    {
      "flag": "--all=false",
      "description": "Select all resources, in the namespace of the specified resource types"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-set'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--local=false",
      "description": "If true, set serviceaccount will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "set subject": [
    {
      "flag": "--all=false",
      "description": "Select all resources, in the namespace of the specified resource types"
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-set'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files the resource to update the subjects"
    },
    {
      "flag": "--group=[]",
      "description": "Groups to bind to the role"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "--local=false",
      "description": "If true, set subject will NOT contact api-server but run locally."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--serviceaccount=[]",
      "description": "Service accounts to bind to the role"
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--user=[]",
      "description": "Usernames to bind to the role"
    }
  ],
  "rollout history": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--revision=0",
      "description": "See the details, including podTemplate of the revision specified"
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "rollout pause": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--field-manager='kubectl-rollout'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "rollout restart": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--field-manager='kubectl-rollout'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "rollout resume": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--field-manager='kubectl-rollout'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "rollout status": [
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--revision=0",
      "description": "Pin to a specific revision for showing its status. Defaults to 0 (last revision)."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--timeout=0s",
      "description": "The length of time to wait before ending watch, zero means never. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h)."
    },
    {
      "flag": "-w, --watch=true",
      "description": "Watch the status of the rollout until it's done."
    }
  ],
  "rollout undo": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to get from a server."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--to-revision=0",
      "description": "The revision to rollback to. Default to 0 (last revision)."
    }
  ],
  "certificate approve": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to update"
    },
    {
      "flag": "--force=false",
      "description": "Update the CSR even if it is already approved."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "certificate deny": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to update"
    },
    {
      "flag": "--force=false",
      "description": "Update the CSR even if it is already denied."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "cluster-info dump": [
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If true, dump all namespaces. If true, --namespaces is ignored."
    },
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--namespaces=[]",
      "description": "A comma separated list of namespaces to dump."
    },
    {
      "flag": "-o, --output='json'",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--output-directory=''",
      "description": "Where to output the files. If empty or '-' uses stdout, otherwise creates a directory hierarchy in that directory"
    },
    {
      "flag": "--pod-running-timeout=20s",
      "description": "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running"
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "top node": [
    {
      "flag": "--no-headers=false",
      "description": "If present, print output without headers"
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-capacity=false",
      "description": "Print node resources based on Capacity instead of Allocatable(default) of the nodes."
    },
    {
      "flag": "--show-swap=false",
      "description": "Print node resources related to swap memory."
    },
    {
      "flag": "--sort-by=''",
      "description": "If non-empty, sort nodes list using specified field. The field can be either 'cpu' or 'memory'."
    },
    {
      "flag": "--use-protocol-buffers=true",
      "description": "Enables using protocol-buffers to access Metrics API."
    }
  ],
  "top pod": [
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace."
    },
    {
      "flag": "--containers=false",
      "description": "If present, print usage of containers within a pod."
    },
    {
      "flag": "--field-selector=''",
      "description": "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type."
    },
    {
      "flag": "--no-headers=false",
      "description": "If present, print output without headers."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    },
    {
      "flag": "--show-swap=false",
      "description": "Print pod resources related to swap memory."
    },
    {
      "flag": "--sort-by=''",
      "description": "If non-empty, sort pods list using specified field. The field can be either 'cpu' or 'memory'."
    },
    {
      "flag": "--sum=false",
      "description": "Print the sum of the resource usage"
    },
    {
      "flag": "--use-protocol-buffers=true",
      "description": "Enables using protocol-buffers to access Metrics API."
    }
  ],
  "auth can-i": [
    {
      "flag": "-A, --all-namespaces=false",
      "description": "If true, check the specified action in all namespaces."
    },
    {
      "flag": "--list=false",
      "description": "If true, prints all allowed actions."
    },
    {
      "flag": "--no-headers=false",
      "description": "If true, prints allowed actions without headers"
    },
    {
      "flag": "-q, --quiet=false",
      "description": "If true, suppress output and just return the exit code."
    },
    {
      "flag": "--subresource=''",
      "description": "SubResource such as pod/log or deployment/scale"
    }
  ],
  "auth reconcile": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files identifying the resource to reconcile."
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--remove-extra-permissions=false",
      "description": "If true, removes extra permissions added to roles"
    },
    {
      "flag": "--remove-extra-subjects=false",
      "description": "If true, removes extra subjects added to rolebindings"
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "auth whoami": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "apply edit-last-applied": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--field-manager='kubectl-client-side-apply'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files to use to edit the resource"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    },
    {
      "flag": "--windows-line-endings=false",
      "description": "Defaults to the line ending native to your platform."
    }
  ],
  "apply set-last-applied": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--create-annotation=false",
      "description": "Will create 'last-applied-configuration' annotations if current objects doesn't have one"
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files that contains the last-applied-configuration annotations"
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "apply view-last-applied": [
    {
      "flag": "--all=false",
      "description": "Select all resources in the namespace of the specified resource types"
    },
    {
      "flag": "-f, --filename=[]",
      "description": "Filename, directory, or URL to files that contains the last-applied-configuration annotations"
    },
    {
      "flag": "-k, --kustomize=''",
      "description": "Process the kustomization directory. This flag can't be used together with -f or -R."
    },
    {
      "flag": "-o, --output='yaml'",
      "description": "Output format. Must be one of (yaml, json)"
    },
    {
      "flag": "-R, --recursive=false",
      "description": "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory."
    },
    {
      "flag": "-l, --selector=''",
      "description": "Selector (label query) to filter on, supports '=', '==', '!=', 'in', 'notin'.(e.g. -l key1=value1,key2=value2,key3 in (value3)). Matching objects must satisfy all of the specified label constraints."
    }
  ],
  "config current-context": [],
  "config delete-cluster": [],
  "config delete-context": [],
  "config delete-user": [],
  "config get-clusters": [],
  "config get-contexts": [
    {
      "flag": "--no-headers=false",
      "description": "When using the default or custom-column output format, don't print headers (default print headers)."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (name)."
    }
  ],
  "config get-users": [],
  "config rename-context": [],
  "config set": [
    {
      "flag": "--set-raw-bytes=false",
      "description": "When writing a []byte PROPERTY_VALUE, write the given string directly without base64 decoding."
    }
  ],
  "config set-cluster": [
    {
      "flag": "--certificate-authority=''",
      "description": "Path to certificate-authority file for the cluster entry in kubeconfig"
    },
    {
      "flag": "--embed-certs=false",
      "description": "embed-certs for the cluster entry in kubeconfig"
    },
    {
      "flag": "--insecure-skip-tls-verify=false",
      "description": "insecure-skip-tls-verify for the cluster entry in kubeconfig"
    },
    {
      "flag": "--proxy-url=''",
      "description": "proxy-url for the cluster entry in kubeconfig"
    },
    {
      "flag": "--server=''",
      "description": "server for the cluster entry in kubeconfig"
    },
    {
      "flag": "--tls-server-name=''",
      "description": "tls-server-name for the cluster entry in kubeconfig"
    }
  ],
  "config set-context": [
    {
      "flag": "--cluster=''",
      "description": "cluster for the context entry in kubeconfig"
    },
    {
      "flag": "--current=false",
      "description": "Modify the current context"
    },
    {
      "flag": "-n, --namespace=''",
      "description": "namespace for the context entry in kubeconfig"
    },
    {
      "flag": "--user=''",
      "description": "user for the context entry in kubeconfig"
    }
  ],
  "config set-credentials": [
    {
      "flag": "--auth-provider=''",
      "description": "Auth provider for the user entry in kubeconfig"
    },
    {
      "flag": "--auth-provider-arg=[]",
      "description": "'key=value' arguments for the auth provider"
    },
    {
      "flag": "--client-certificate=''",
      "description": "Path to client-certificate file for the user entry in kubeconfig"
    },
    {
      "flag": "--client-key=''",
      "description": "Path to client-key file for the user entry in kubeconfig"
    },
    {
      "flag": "--embed-certs=false",
      "description": "Embed client cert/key for the user entry in kubeconfig"
    },
    {
      "flag": "--exec-api-version=''",
      "description": "API version of the exec credential plugin for the user entry in kubeconfig"
    },
    {
      "flag": "--exec-arg=[]",
      "description": "New arguments for the exec credential plugin command for the user entry in kubeconfig"
    },
    {
      "flag": "--exec-command=''",
      "description": "Command for the exec credential plugin for the user entry in kubeconfig"
    },
    {
      "flag": "--exec-env=[]",
      "description": "'key=value' environment values for the exec credential plugin"
    },
    {
      "flag": "--exec-interactive-mode=''",
      "description": "InteractiveMode of the exec credentials plugin for the user entry in kubeconfig"
    },
    {
      "flag": "--exec-provide-cluster-info=false",
      "description": "ProvideClusterInfo of the exec credentials plugin for the user entry in kubeconfig"
    },
    {
      "flag": "--password=''",
      "description": "password for the user entry in kubeconfig"
    },
    {
      "flag": "--token=''",
      "description": "token for the user entry in kubeconfig"
    },
    {
      "flag": "--username=''",
      "description": "username for the user entry in kubeconfig"
    }
  ],
  "config unset": [],
  "config use-context": [],
  "config view": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--flatten=false",
      "description": "Flatten the resulting kubeconfig file into self-contained output (useful for creating portable kubeconfig files)"
    },
    {
      "flag": "--merge=true",
      "description": "Merge the full hierarchy of kubeconfig files"
    },
    {
      "flag": "--minify=false",
      "description": "Remove all information not used by current-context from the output"
    },
    {
      "flag": "-o, --output='yaml'",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--raw=false",
      "description": "Display raw byte data and sensitive data"
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "kuberc set": [
    {
      "flag": "--allowlist-entry=[]",
      "description": "Allowlist entry the form field=value (can be specified multiple times)"
    },
    {
      "flag": "--appendarg=[]",
      "description": "Argument to append to the command (can be specified multiple times, for aliases only)"
    },
    {
      "flag": "--command=''",
      "description": "Command to configure (e.g., 'get', 'create', 'set env')"
    },
    {
      "flag": "--kuberc=''",
      "description": "Path to the kuberc file to use for preferences. This can be disabled by exporting KUBECTL_KUBERC=false feature gate or turning off the feature KUBERC=off."
    },
    {
      "flag": "--name=''",
      "description": "Alias name (required for --section=aliases)"
    },
    {
      "flag": "--option=[]",
      "description": "Flag option in the form flag=value (can be specified multiple times)"
    },
    {
      "flag": "--overwrite=false",
      "description": "Allow overwriting existing entries"
    },
    {
      "flag": "--policy=''",
      "description": "Plugin policy to use for exec credential plugins, must be one of 'AllowAll', 'DenyAll' or 'Allowlist'"
    },
    {
      "flag": "--prependarg=[]",
      "description": "Argument to prepend to the command (can be specified multiple times, for aliases only)"
    },
    {
      "flag": "--section=''",
      "description": "Section to modify: 'defaults', 'aliases', or 'credentialplugin'"
    }
  ],
  "kuberc view": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--kuberc=''",
      "description": "Path to the kuberc file to use for preferences. This can be disabled by exporting KUBECTL_KUBERC=false feature gate or turning off the feature KUBERC=off."
    },
    {
      "flag": "-o, --output='yaml'",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    }
  ],
  "plugin list": [
    {
      "flag": "--name-only=false",
      "description": "If true, display only the binary name of each plugin, rather than its full path"
    }
  ],
  "create secret docker-registry": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--append-hash=false",
      "description": "Append a hash of the secret to its name."
    },
    {
      "flag": "--docker-email=''",
      "description": "Email for Docker registry"
    },
    {
      "flag": "--docker-password=''",
      "description": "Password for Docker registry authentication"
    },
    {
      "flag": "--docker-server='https://index.docker.io/v1/'",
      "description": "Server location for Docker registry"
    },
    {
      "flag": "--docker-username=''",
      "description": "Username for Docker registry authentication"
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--from-file=[]",
      "description": "Key files can be specified using their file path, in which case a default name of .dockerconfigjson will be given to them, or optionally with a name and file path, in which case the given name will be used. Specifying a directory will iterate each named file in the directory that is a valid secret key. For this command, the key should always be .dockerconfigjson."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create secret generic": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--append-hash=false",
      "description": "Append a hash of the secret to its name."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--from-env-file=[]",
      "description": "Specify the path to a file to read lines of key=val pairs to create a secret."
    },
    {
      "flag": "--from-file=[]",
      "description": "Key files can be specified using their file path, in which case a default name will be given to them, or optionally with a name and file path, in which case the given name will be used. Specifying a directory will iterate each named file in the directory that is a valid secret key."
    },
    {
      "flag": "--from-literal=[]",
      "description": "Specify a key and literal value to insert in secret (i.e. mykey=somevalue)"
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--type=''",
      "description": "The type of secret to create"
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create secret tls": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--append-hash=false",
      "description": "Append a hash of the secret to its name."
    },
    {
      "flag": "--cert=''",
      "description": "Path to PEM encoded public key certificate."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--key=''",
      "description": "Path to private key associated with given certificate."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create service clusterip": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--clusterip=''",
      "description": "Assign your own ClusterIP or set to 'None' for a 'headless' service (no loadbalancing)."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--tcp=[]",
      "description": "Port pairs can be specified as '<port>:<targetPort>'."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create service externalname": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--external-name=''",
      "description": "External name of service"
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--tcp=[]",
      "description": "Port pairs can be specified as '<port>:<targetPort>'."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create service loadbalancer": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--tcp=[]",
      "description": "Port pairs can be specified as '<port>:<targetPort>'."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ],
  "create service nodeport": [
    {
      "flag": "--allow-missing-template-keys=true",
      "description": "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats."
    },
    {
      "flag": "--dry-run='none'",
      "description": "Must be \"none\", \"server\", or \"client\". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource."
    },
    {
      "flag": "--field-manager='kubectl-create'",
      "description": "Name of the manager used to track field ownership."
    },
    {
      "flag": "--node-port=0",
      "description": "Port used to expose the service on each node in a cluster."
    },
    {
      "flag": "-o, --output=''",
      "description": "Output format. One of: (json, yaml, kyaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)."
    },
    {
      "flag": "--save-config=false",
      "description": "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
    },
    {
      "flag": "--show-managed-fields=false",
      "description": "If true, keep the managedFields when printing objects in JSON or YAML format."
    },
    {
      "flag": "--tcp=[]",
      "description": "Port pairs can be specified as '<port>:<targetPort>'."
    },
    {
      "flag": "--template=''",
      "description": "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]."
    },
    {
      "flag": "--validate='strict'",
      "description": "Must be one of: strict (or true), warn, ignore (or false). \"true\" or \"strict\" will use a schema to validate the input and fail the request if invalid. It will perform server side validation if ServerSideFieldValidation is enabled on the api-server, but will fall back to less reliable client-side validation if not. \"warn\" will warn about unknown or duplicate fields without blocking the request if server-side field validation is enabled on the API server, and behave as \"ignore\" otherwise. \"false\" or \"ignore\" will not perform any schema validation, silently dropping any unknown or duplicate fields."
    }
  ]
};
export const TOP_LEVEL_COMMANDS = ["create","expose","run","set","explain","get","edit","delete","rollout","scale","autoscale","certificate","cluster-info","top","cordon","uncordon","drain","taint","describe","logs","attach","exec","port-forward","proxy","cp","auth","debug","events","diff","apply","patch","replace","wait","kustomize","label","annotate","completion","api-resources","api-versions","config","kuberc","plugin","version"];
export const NESTED_COMMANDS = ["create clusterrole","create clusterrolebinding","create configmap","create cronjob","create deployment","create ingress","create job","create namespace","create poddisruptionbudget","create priorityclass","create quota","create role","create rolebinding","create secret","create service","create serviceaccount","create token","set env","set image","set resources","set selector","set serviceaccount","set subject","rollout history","rollout pause","rollout restart","rollout resume","rollout status","rollout undo","certificate approve","certificate deny","cluster-info dump","top node","top pod","auth can-i","auth reconcile","auth whoami","apply edit-last-applied","apply set-last-applied","apply view-last-applied","config current-context","config delete-cluster","config delete-context","config delete-user","config get-clusters","config get-contexts","config get-users","config rename-context","config set","config set-cluster","config set-context","config set-credentials","config unset","config use-context","config view","kuberc set","kuberc view","plugin list","create secret docker-registry","create secret generic","create secret tls","create service clusterip","create service externalname","create service loadbalancer","create service nodeport"];

