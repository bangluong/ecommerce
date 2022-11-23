<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Store a new product.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->category_name;
        $category->banner = $request->banner;
        $category->description = $request->description;
        try {
            $category->save();
            return response()->json([
                'status' => 200,
                'message'=>'success'
            ]);
        } catch (Exception $exception) {
            $message = 'somethings when wrong while saving your data';
            return response()->json([
                'data'=> $category,
                'error'=>$exception->getMessage(),
                'status'=> 'error',
                'message'=>$message
            ]);
        }
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll(): \Illuminate\Http\JsonResponse
    {
        $categories = Category::all();
        return response()->json($categories);
    }
}
