<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductImage;
use Exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Store a new product.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->product_sku = $request->product_sku;
        $product->product_name = $request->product_name;
        $product->description = $request->description;
        $img_urls = $request->img_urls;
        try {
            $product->save();
            $id = $product->id;
            $category_ids = explode(',', $request->categories);
            $productCategory = new ProductCategory();
            $productCategory->deleteByProductId($id);
            foreach ($category_ids as $category_id) {
                if ($category_id == 0) {
                    continue;
                }
                $tmp = new ProductCategory();
                $tmp->product_id = $id;
                $tmp->category_id = $category_id;
                $tmp->save();
            }

            $image = new ProductImage();
            $image->deleteByProductId($id);
            foreach ($img_urls as $img_url) {
                $imageModel = new ProductImage();
                $imageModel->product_id = $id;
                $imageModel->value = $img_url;
                $imageModel->save();
            }
            return response()->json([
                'status' => 200,
                'message'=>'success',
            ]);
        } catch (Exception $exception) {
            $message = 'somethings when wrong while saving your data';
            if ($exception->getCode() == 23000) {
                $message = 'Product SKU is unique';
            }
            return response()->json([
                'error'=>$exception,
                'status'=> 'error',
                'message'=>$message
            ]);
        }
    }

    public function getCategories()
    {
        $product =  Product::with('categories')->find(1);
        return response()->json($product->categories);
    }

    public function getProductImages($productId)
    {
        $product = Product::with('images')->find($productId);
        return response()->json($product->images);
    }
}
