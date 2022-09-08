<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mockery\Exception;
use Illuminate\Support\Facades\DB;

/**
 *
 */
class ProductCategory extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'categories_products';

    /**
     * @param $id
     * @return void
     */
    public function deleteByProductId($id): void
    {
        DB::table($this->table)->where('product_id', '=', $id)->delete();
    }
}
