 
#include "LightingOBJApplication.h"
#include "LightingSphereApplication.h" 

int main() {
	
	// change startup application
	BaseApplication* app = new LightingSphereApplication();
	if (app->startup())
		app->run();
	//system("pause");
	app->shutdown();

	return 0;
}