import docker

# client = docker.from_env()
client = docker.DockerClient(base_url='http://192.168.99.100')
# client = docker.DockerClient(base_url='unix://var/run/docker.sock')

client.info()
# client.containers.run("ubuntu", "echo hello world")

# client.containers.list()