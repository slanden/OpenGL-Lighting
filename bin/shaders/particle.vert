// a simple particle shader
#version 410

layout( location = 0 ) in vec4 Position;
layout( location = 1 ) in vec4 Colour;

out vec4 vColour;

uniform mat4 ProjectionViewModel;

void main() {
	vColour = Colour;
	gl_Position = ProjectionViewModel * Position;
}