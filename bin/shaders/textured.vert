// a simple diffuse texture shader
#version 410

layout( location = 0 ) in vec4 Position;
layout( location = 3 ) in vec2 TexCoord; // location 3 matches AIEVertex struct

out vec2 vTexCoord;

uniform mat4 ProjectionViewModel;

void main() {
	vTexCoord = TexCoord;
	gl_Position = ProjectionViewModel * Position;
}