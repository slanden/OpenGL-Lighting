// a simple particle shader
#version 410

in vec4 vColour;
in vec2 vTexCoord;

out vec4 FragColour;

uniform sampler2D diffuseTexture;
uniform sampler2D alphaTexture;

void main() {
	vec3 rgb = texture( diffuseTexture, vTexCoord ).rgb;
	float o = texture( alphaTexture, vTexCoord ).r;

	FragColour = vec4( rgb * vColour.rgb, o * vColour.a );
}