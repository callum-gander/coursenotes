#include <cstdlib>
#include <cstdio>

// drawing a box in c++

typedef float Point[3];

int main()
{
    Point corners[8] = {
        {1, -1, -5},
        {1, -1, -3},
        {1, 1, -5},
        {1, 1, -3},
        {-1, -1, -5},
        {-1, -1, -3},
        {-1, 1, -5},
        {-1, 1, -3},
    };

    const unsigned int image_width = 512, image_height = 512;

    for (int i = 0; i < 8; ++i)
    {
        // divide the x and y coordinates by the z coordinate to
        // project the point on the canvas
        float x_proj = corners[i][0] / -corners[i][2];
        float y_proj = corners[i][1] / -corners[i][2];
        float x_proj_remap = (1 + x_proj) / 2;
        float y_proj_remap = (1 + y_proj) / 2;
        float x_proj_pix = x_proj_remap * image_width;
        float y_proj_pix = y_proj_remap * image_height;
        printf("projected corner: %d x:%f y:%f\n", i, x_proj_pix, y_proj_pix);
    }
    return 0;
}