// classic Phong equation
#version 410

in vec4 vPosition;
in vec4 vNormal;

uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;

uniform float specularPower;

uniform vec3 Ia;
uniform vec3 Id;
uniform vec3 Is;

uniform vec3 lightPosition;

uniform vec3 cameraPosition;

out vec4 FragColour;

void main() 
{
	//vNormal is normalized in vert shader
	vec3 diffuse;
	vec3 ambient;
	vec3 specular;
	
	vec3 N = normalize(vNormal).xyz;
	 
	vec3 VertToLight = normalize(vec3(lightPosition) - vec3(vPosition));

	//ambient
	ambient = Ka * Ia;

	//diffuse	
	diffuse = Kd * max(0, dot(N, VertToLight)) * Id;

	//specular
	//vec3 Rm = normalize((lightDir + cameraPosition) * dot(vNormal.xyz, lightDir));
	vec3 Rm = -VertToLight - 2 * dot(N, -VertToLight) * N;
	vec3 V = normalize(cameraPosition - vPosition.xyz);
	specular = Ks * pow(max(0.0f, dot(Rm, V)), specularPower) * Is;

	//diffuse = vec3(0,0,0);
	//ambient = vec3(0,0,0);
	//specular = vec3(0,0,0);

	FragColour = vec4(ambient + diffuse + specular, 1);
}