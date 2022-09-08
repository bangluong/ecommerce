<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProductImage extends Model
{
    use HasFactory;
    /**
     * @param $id
     * @return void
     */
    public function deleteByProductId($id): void
    {
        DB::table('product_images')->where('product_id', '=', $id)->delete();
    }
}
