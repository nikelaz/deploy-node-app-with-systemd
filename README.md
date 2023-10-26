# Deploy a Node.js Application with systemd

This repository is an extra resource to an educational YouTube video:

[**Deploy a Node.js Application as a Systemd Service**](https://youtu.be/vCcNu2A2bhQ?si=gkFD0RHBAGqO98y7)

# How to Use This Repository

The provided `node-app-template.service` is a service definition file template. After you edit the file to suit your Node.js application, you have to move/copy it to `/lib/systemd/system` in your Linux filesystem. After the .service file is in the appropriate directory run:

```
systemctl daemon-reload
```

This will reload the services.

After that you can verify that the service is loaded with:

```
systemctl status <your-service-name>
```

The service information should appear, but it will be disabled and stopped. To start the service you can run:

```
systemctl start <your-service-name>
```

This will start the service, but it is not enabled yet. This means that once you restart the system its running on, it will not turn on automatically. To enable the service run:

```
systemctl enable <your-service-name>
```
