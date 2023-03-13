# kubernetes-ingress-demo-minikube-

BELOW ARE THE STEPS TO TEST & RUN IT LOCALLY ON ANY MINIKUBE CLUSTER :- 

1. kubectl apply -f nodedeployment.yaml
   kubectl apply -f nodeservice.yaml
   kubectl apply -f nginxdeploy.yaml
   kubectl apply -f nginxservice.yaml

2. check if all pods and services are up and are in running state
    
   kubectl get all

3. CONFIGURE INGRESS ON YOUR CLUSTER
   
   minikube addons enable ingress
   
   confirm setup :- kubectl get po -n ingress-nginx

4. kubectl apply -f appingress.yaml

5. CONFIGURE YOUR DNS SETTINGS, BOTH THE HOSTNAMES IN INGRESS FILE SHOULD MATCH TO THE IP-ADDRESS OF THE MINIKUBE CLUSTER

    FOR LINUX USERS :- just update the /etc/hosts file and configure
    FOR WINDOWS USERS :- https://www.liquidweb.com/kb/edit-host-file-windows-10/
