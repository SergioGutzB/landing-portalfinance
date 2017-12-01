
echo "Hi, $USER !"
echo "You're Starting Deployment Process PortalFinance Website...."

echo "Building App..."

npm run build

echo "Removing Docker Container..."

# Remove docker containers
docker rm -f $(docker ps -a -q)
docker rmi -f $(docker images -q)

echo "Creating Docker Instance...."

docker-compose -f docker-compose.yml -f docker-compose.build.yml build

IMAGEID="$(docker images -q portalfinance_website:production)"

echo "Tagging..."

#Tagging Container Image
docker tag ${IMAGEID} 558028871948.dkr.ecr.us-east-1.amazonaws.com/portalfinance_website:production

echo "Logging AWS..."

# Login ECR
LOGIN_COMMAND=$(aws ecr get-login --no-include-email --region ${REGION})
eval $LOGIN_COMMAND

#clear

echo "Pushing to ECR...."

docker push 558028871948.dkr.ecr.us-east-1.amazonaws.com/portalfinance_website:production

echo "Deploying to AWS-EC2.... "

echo "1) Killing Current App deployed.... "

ecs-cli compose -f aws-production-compose.yml service rm --cluster pf-production-frontend-cluster


#TENANT=${TENANT} ecs-cli compose --project-name pf-${TENANT}-frontend -f aws-${ENV}-compose.yml service up --target-group-arn ${TARGET_GROUP} --container-name web --container-port 80 --role ecsServiceRole --cluster pf-${ENV}-frontend-cluster





