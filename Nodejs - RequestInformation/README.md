# NodeJS - Request Information
Source files to deploy an Azure AppService based on a linux container that displays request related information for troubleshooting purposes.

The deployment contains:
* Azure Bicep template files for the AppService
* NodeJS Application Code
* Dockerfile

## Deployment
To deploy the environment execute the below steps in sequence.

### Resource Group Creation
1. Create a resource group in the selected location using:
```bash
az group create -n [ResourceGroupName] -l [Location]
```

### AppService Deployment
1. Deploy the [101-Bicep/appService.bicep](https://github.com/cpolydorou/WebApplicationSamples/blob/main/Nodejs%20-%20RequestInformation/101-Bicep/appService.bicep) file using:
```bash
az deployment group create --template-file appService.bicep --resource-group [ResourceGroupName] --parameters location=[Location]
```

## Important note
You have to allow some time to pass following the deployment, since the container is being prepared. To check the status of the process go to the "Deployment Center" blade of the AppService and switch to the "Logs" tab.